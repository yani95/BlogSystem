namespace blog_system_api.Migrations
{
    using DataAccess.Entities;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<blog_system_api.AppDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(blog_system_api.AppDbContext context)
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

            context.Users.AddOrUpdate(
                c => c.username,
                new UserEntity {
                    id = 1,
                    username = "anonymous",
                    password = "none",
                    firstName = "Anonymous",
                    lastName = "User",
                    isAdmin = false,                  
                    picture = "http://i.imgur.com/HQ3YU7n.gif"
                }
            );
        }
    }
}
