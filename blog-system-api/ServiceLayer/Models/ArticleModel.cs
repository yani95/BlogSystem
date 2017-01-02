using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static DataAccess.Entities.ArticleEntity;

namespace ServiceLayer.Models
{
    public class ArticleModel : BaseModel
    {
        [Required(ErrorMessage = "Title is required!")]
        public string title { get; set; }

        [Required(ErrorMessage = "Description is required!")]
        public string description { get; set; }

        public DateTime dateOfCreation { get; set; }

        public DateTime dateOfModification { get; set; }

        [Url]
        public string picture { get; set; }       

        public UserEntity author { get; set; }

        public virtual List<CommentEntity> comments { get; set; }

        public CategoriesEnum category { get; set; }
    }
}
