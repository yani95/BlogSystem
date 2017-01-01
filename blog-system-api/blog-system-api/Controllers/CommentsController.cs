using DataAccess.Entities;
using ServiceLayer;
using ServiceLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace blog_system_api.Controllers
{
    public class CommentsController : BaseController<CommentEntity, CommentModel>
    {
        protected override BaseService<CommentEntity, CommentModel> GetService()
        {
            return new CommentService();
        }
    }
}
