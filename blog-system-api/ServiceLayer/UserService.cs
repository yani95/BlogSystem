using DataAccess;
using DataAccess.Entities;
using DataAccess.Repositories;
using ServiceLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer
{
    public class UserService : BaseService<UserEntity, UserModel>
    {
        public override BaseRepository<UserEntity> CreateRepository()
        {
            return new UserRepository();
        }

        protected override void PopulateItem(UserModel model, ref UserEntity item)
        {
            item.id = model.id;
            item.username = model.username;
            item.password = model.password;
            item.firstName = model.firstName;
            item.lastName = model.lastName;
            item.isAdmin = model.isAdmin;
            item.picture = model.picture;
        }

        protected override void PopulateModel(UserModel model, UserEntity item)
        {
            model.id = item.id;
            model.username = item.username;
            model.password = item.password;
            model.firstName = item.firstName;
            model.lastName = item.lastName;
            model.isAdmin = item.isAdmin;
            model.picture = item.picture;

        }
    }
}
