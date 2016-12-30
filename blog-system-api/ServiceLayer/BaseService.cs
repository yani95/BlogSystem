using DataAccess.Entities;
using DataAccess.Repositories;
using ServiceLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace ServiceLayer
{
    public abstract class BaseService<T, M>
         where T : BaseEntity, new()
         where M : BaseModel, new()
    {
        public BaseRepository<T> Repository { get; set; }

        public abstract BaseRepository<T> CreateRepository();

        protected virtual void PopulateModel(M editmodel, T item) { }

        protected virtual void PopulateItem(M editmodel, ref T item) { }

        public BaseService()
        {
            Repository = CreateRepository();
        }

        public virtual List<M> GetAll(Expression<Func<T, bool>> filter = null)
        {
            List<M> models = new List<M>();
            foreach (T item in Repository.GetAll(filter))
            {
                M model = new M();
                PopulateModel(model, item);
                models.Add(model);
            }
            return models;
        }

        public M GetById(int id)
        {
            M model = new M();
            PopulateModel(model, Repository.GetById(id));
            return model;
        }

        public virtual void Save(M model)
        {
            T entity = new T();
            PopulateItem(model, ref entity);
            Repository.Save(entity);
        }

        public virtual void Delete(M model)
        {
            T entity = Repository.GetById(model.id);
            Repository.Delete(entity);
        }
    }
}
