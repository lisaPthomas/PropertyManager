using PropertyManager.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace PropertyManager.Infrastructure
{
    public class PropertyDataContext : DbContext
    {
        public PropertyDataContext() : base ("PropertyManager")
            {

            }
        public IDbSet<User> Users { get; set; }

        public IDbSet<Property> Properties { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //configure relationships

            modelBuilder.Entity<User>()
                .HasMany(u => u.Properties)
                .WithRequired(p => p.User)
                .HasForeignKey(p => p.UserId);

            base.OnModelCreating(modelBuilder);
        }       
    }
}