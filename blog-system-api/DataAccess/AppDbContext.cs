using DataAccess.Entities;
using System.Data.Entity;

namespace DataAccess
{
    public class AppDbContext<T> : DbContext where T : BaseEntity
    {
        public AppDbContext()
            : base("name=AppDbContext")
        {
        }

        public DbSet<T> Items { get; set; }
    }
}
