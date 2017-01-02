using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Entities
{
    public class CommentEntity : BaseEntity
    {
        public string text { get; set; }

        [ForeignKey("UserEntity")]
        public int UserEntityId { get; set; }

        public virtual UserEntity UserEntity { get; set; }

        [ForeignKey("ArticleEntity")]
        public int articleId { get; set; }

        public virtual ArticleEntity ArticleEntity { get; set; }

        public DateTime dateOfCreation { get; set; }
    }
}
