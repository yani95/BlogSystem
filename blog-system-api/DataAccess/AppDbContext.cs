using DataAccess.Entities;
using System.Data.Entity;

namespace DataAccess
{
    public class AppDbContext : DbContext
    {
        public AppDbContext()
            : base("name=AppDbContext")
        {
        }

        public DbSet<ArticleEntity> Articles { get; set; }
        public DbSet<CommentEntity> Comments { get; set; }
        public DbSet<UserEntity> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
