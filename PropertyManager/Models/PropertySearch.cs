using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PropertyManager.Models
{
    public class PropertySearch
    {
      
        public string UserName  { get; set; }
        public string City { get; set; }

        [StringLength(5)]
        public string Zip { get; set; }
        public double minRent { get; set; }
        public double maxRent { get; set; }
        public int Bedroom { get; set; }
        public double Bathroom { get; set; }
    }
}

