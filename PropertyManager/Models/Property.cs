using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace PropertyManager.Models
{

    public class Property
    {
        //primary key
        public int PropertyId { get; set; }

        //additional columns

        public int UserId { get; set; }
        public string PropertyName { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }

        [Column(TypeName = "VARCHAR")]
        [StringLength(5)]
        public string Zip { get; set; }
        public string ContactPhone { get; set; }
        public double Rent { get; set;}
        public int SqFootage { get; set; }
        public int Bedroom { get; set; }
        public double Bathroom { get; set; }
        public bool PetFriendly { get; set; }
        public int LeaseTerm { get; set; }
        public byte[] PropertyImage { get; set; }

    public virtual User User { get; set; }

}
}