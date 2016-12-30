using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServiceLayer.Models
{
    public class CommentModel : BaseModel
    {
        [Required(ErrorMessage = "Description is required!")]
        public string text { get; set; }

        public int authorId { get; set; }

        public virtual UserEntity author { get; set; }

        public int articleId { get; set; }

        public virtual ArticleEntity article { get; set; }

        public DateTime dateOfCreation { get; set; }
    }
}
