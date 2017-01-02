using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Entities
{
    public class UserEntity : BaseEntity
    {
        public string username { get; set; }

        public string password { get; set; }

        public string firstName { get; set; }

        public string lastName { get; set; }

        public bool isAdmin { get; set; }

        public string picture { get; set; }

        public virtual List<ArticleEntity> articles { get; set; }

        public virtual List<CommentEntity> comments { get; set; }
    }
}
