using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PropertyManager.Models
{
    public class User
    {
        //primary key
        public int UserId { get; set; }

        //additional columns
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool IsPropertyManager { get; set; }
        public string UserName { get; set; }
        public virtual ICollection<Property> Properties { get; set; }
    }



}