using DataAccess.Entities;
using ServiceLayer;
using ServiceLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace blog_system_api.Controllers
{
    public class UsersController : BaseController<UserEntity, UserModel>
    {
        protected override BaseService<UserEntity, UserModel> GetService()
        {
            return new UserService();
        }
    }
}