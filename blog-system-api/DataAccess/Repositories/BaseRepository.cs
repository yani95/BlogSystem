using DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
    public abstract class BaseRepository<T> where T : BaseEntity, new()
    {
        protected readonly AppDbContext<T> Context;

        public DbSet<T> DbSet { get; set; }

        public BaseRepository()
        {
            this.Context = new AppDbContext<T>();
            DbSet = Context.Set<T>();
        }

        public virtual List<T> GetAll(Expression<Func<T, bool>> filter = null)
        {
            IQueryable<T> result = DbSet;

            if (filter != null)
            {
                return result.Where(filter).ToList();
            }
            else
            {
                return result.ToList();
            }
        }

        public T GetById(int id)
        {
            return DbSet.Find(id);
        }

        public void Insert(T entity)
        {
            DbSet.Add(entity);
            Context.SaveChanges();
        }

        virtual public void Update(T entity)
        {
            Context.Entry(entity).State = EntityState.Modified;
            Context.SaveChanges();
        }

        public void Save(T entity)
        {
            if (entity.id > 0)
            {
                Update(entity);
            }
            else
            {
                Insert(entity);

            }
        }

        public void Delete(T entity)
        {
            DbSet.Remove(entity);
            Context.SaveChanges();
        }
    }
}
