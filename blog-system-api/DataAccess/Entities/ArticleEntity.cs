using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Entities
{
    public class ArticleEntity : BaseEntity
    {     
        public string title { get; set; }

        public string description { get; set; }

        public DateTime dateOfCreation { get; set; }

        public DateTime dateOfModification { get; set; }

        public string picture { get; set; }

        public int authorId { get; set; }

        public virtual UserEntity author { get; set; }

        public virtual List<CommentEntity> comments { get; set; }

        public CategoriesEnum category { get; set; }

        public enum CategoriesEnum
        {
            music,
            travel,
            food,
            business,
            technology,
            design,
            science,
            education,
            photography,
            other
        }
    }
}
