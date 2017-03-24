using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using PropertyManager.Infrastructure;
using PropertyManager.Models;

namespace PropertyManager.Controllers
{
    public class PropertiesController : ApiController
    {
        private PropertyDataContext db = new PropertyDataContext();

        //GET: api/Properties/search
        [Route("api/Properties/search")]
        [HttpGet]

        public IQueryable<Property> SearchProperties([FromUri]PropertySearch objectSearch)
        {
            IQueryable<Property> properties = db.Properties;

            if (!String.IsNullOrEmpty(objectSearch.City))
            {
                properties = properties.Where(p => p.City == objectSearch.City);
            }

            if (!String.IsNullOrEmpty(objectSearch.Zip))
            {
                properties = properties.Where(p => p.Zip == objectSearch.Zip);
            }

            if (objectSearch.minRent> 0)
            {
                properties = properties.Where(p => p.Rent >= objectSearch.minRent);
            }

            if (objectSearch.maxRent > 0)
            {
                properties = properties.Where(p => p.Rent <= objectSearch.maxRent);
            }

            if (objectSearch.Bedroom > 0)
            {
                properties = properties.Where(p => p.Bedroom == objectSearch.Bedroom);
            }

            if (objectSearch.Bathroom > 0)
            {
                properties = properties.Where(p => p.Bathroom == objectSearch.Bathroom);
            }


            return properties;
        }

        //GET: api/Properties/search/username
        [Route("api/Properties/search/username")]
        [HttpGet]
        public IQueryable<Property> SearchPropertiesByUser([FromUri]PropertySearch SearchUser)
        {
            string username = SearchUser.UserName;
            IQueryable<Property> user = db.Properties.Where(u => u.User.UserName == username);
      
            return user;
        }

        //GET: api/Properties
        public IQueryable<Property> GetProperties()
        {
             return db.Properties;
        }



        // GET: api/Properties/5
        [ResponseType(typeof(Property))]
        public IHttpActionResult GetProperty(int id)
        {
            Property property = db.Properties.Find(id);
            if (property == null)
            {
                return NotFound();
            }

            return Ok(property);
        }

        // PUT: api/Properties/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProperty(int id, Property property)
        {
           
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != property.PropertyId)
            {
                return BadRequest();
            }

            db.Entry(property).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PropertyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Properties
        [ResponseType(typeof(Property))]
        public IHttpActionResult PostProperty(Property property)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Properties.Add(property);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = property.PropertyId }, property);
        }

        // DELETE: api/Properties/5
        [ResponseType(typeof(Property))]
        public IHttpActionResult DeleteProperty(int id)
        {
            Property property = db.Properties.Find(id);
            if (property == null)
            {
                return NotFound();
            }

            db.Properties.Remove(property);
            db.SaveChanges();

            return Ok(property);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PropertyExists(int id)
        {
            return db.Properties.Count(e => e.PropertyId == id) > 0;
        }
    }
}