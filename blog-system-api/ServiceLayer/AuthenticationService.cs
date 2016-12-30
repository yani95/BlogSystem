using DataAccess.Entities;
using DataAccess.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer
{
    public class AuthenticationService
    {
        public UserEntity LoggedUser { get; private set; }

        public void AuthenticateUser(string username, string password)
        {
            UserRepository userRepo = new UserRepository();
            LoggedUser = userRepo.GetAll(u => u.username == username && u.password == password).FirstOrDefault();
        }
    }
}
