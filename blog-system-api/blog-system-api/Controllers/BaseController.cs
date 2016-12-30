using DataAccess.Entities;
using ServiceLayer;
using ServiceLayer.Models;
using System.Web.Http;

namespace blog_system_api.Controllers
{
    public abstract class BaseController<T, M> : ApiController
       where T : BaseEntity, new()
       where M : BaseModel, new()
    {
        protected BaseService<T, M> service { get; set; }

        protected abstract BaseService<T, M> GetService();

        public BaseController()
        {
            service = GetService();
        }


        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(service.GetAll());
        }

        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            M model = service.GetById(id);
            if (model == null)
            {
                return NotFound();
            }

            return Ok(model);
        }

        [HttpPost]
        public IHttpActionResult Post(M model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid values!");
            }
            else
            {
                service.Save(model);
                return Ok();
            }
        }

        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            try
            {
                M model = service.GetById(id);
                service.Delete(model);
                return Ok();
            }
            catch (System.Exception)
            {
                return BadRequest("Something went wrong! Try again.");
            }

        }
    }
}
