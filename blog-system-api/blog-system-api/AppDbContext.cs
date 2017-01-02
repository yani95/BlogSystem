using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace blog_system_api
{
    public class AppDbContext : DbContext
    {
        public AppDbContext()
            :base("name=AppDbContext")
        {
        }
        public DbSet<ArticleEntity> Articles { get; set; }
        public DbSet<CommentEntity> Comments { get; set; }
        public DbSet<UserEntity> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //modelBuilder.Conventions.Add<ManyToManyCascadeDeleteConvention>();
            
            base.OnModelCreating(modelBuilder);
            //modelBuilder.Entity<CommentEntity>().HasRequired(c => c.UserEntity)
            //                                        .WithMany()
            //                                        .WillCascadeOnDelete(false);
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
        }
    }
}