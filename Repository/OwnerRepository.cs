﻿using Contracts;
using Entities;
using Entities.Models;
using System.Collections.Generic;
using System.Linq;
using System;
using Entities.ExtendedModels;
using Entities.Extensions;

namespace Repository
{
    public class OwnerRepository: RepositoryBase<Owner>, IOwnerRepository
    {
        public OwnerRepository(RepositoryContext repositoryContext)
            :base(repositoryContext)
        {
        }

        public IEnumerable<Owner> GetAllOwners()
        {
            return FindAll().OrderBy(ow => ow.Name);
        }

        public Owner GetOwnerById(Guid ownerId)
        {
            var ownerDetail= FindByCondition(owner => owner.Id.Equals(ownerId.ToString()))
                    .DefaultIfEmpty(new Owner())
                    .FirstOrDefault();
            return ownerDetail;
        }

        public OwnerExtended GetOwnerWithDetails(Guid ownerId)
       {
            return new OwnerExtended(GetOwnerById(ownerId))
            {
                Accounts = RepositoryContext.Accounts
                    .Where(a => a.OwnerId == ownerId.ToString())
            };
        }

        public void CreateOwner(Owner owner)
        {
            owner.Id = Guid.NewGuid().ToString();
            Create(owner);
            Save();
        }

        public void UpdateOwner(Owner dbOwner, Owner owner)
        {
            dbOwner.Map(owner);
            Update(dbOwner);
            Save();
        }

        public void DeleteOwner(Owner owner)
        {
            Delete(owner);
            Save();
        }
    }
}
