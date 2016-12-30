using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Models
{
    public class UserModel : BaseModel
    {
        [Required(ErrorMessage = "Username is required!")]
        public string username { get; set; }

        [Required(ErrorMessage = "Password is required!")]
        public string password { get; set; }

        public string firstName { get; set; }

        public string lastName { get; set; }

        public bool isAdmin { get; set; }

        public string picture { get; set; }

    }
}
