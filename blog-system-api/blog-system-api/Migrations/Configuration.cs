namespace BlogSystemAPI.Migrations
{
    using DataAccess.Entities;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<DataAccess.AppDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
        }

        protected override void Seed(DataAccess.AppDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            context.Articles.AddOrUpdate(
                a => a.id,
                new ArticleEntity()
                {
                    id = 1,
                    title = "Hello world!",
                    description = "Slow and curious blog!",
                    dateOfCreation = DateTime.Now,
                    dateOfModification = DateTime.Now,
                    picture = "http://i.imgur.com/bhBcnOl.jpg",
                    authorId = 1,
                    category = ArticleEntity.CategoriesEnum.food
                }
            );
        }
    }
}
