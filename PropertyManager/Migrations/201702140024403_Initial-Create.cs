namespace PropertyManager.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Properties",
                c => new
                    {
                        PropertyId = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        PropertyName = c.String(),
                        Address1 = c.String(),
                        Address2 = c.String(),
                        City = c.String(),
                        State = c.String(),
                        Zip = c.Int(nullable: false),
                        ContactPhone = c.Int(nullable: false),
                        Rent = c.Double(nullable: false),
                        SqFootage = c.Double(nullable: false),
                        Bedroom = c.Int(nullable: false),
                        Bathroom = c.Double(nullable: false),
                        PetFriendly = c.Boolean(nullable: false),
                        LeaseTerm = c.Int(nullable: false),
                        PropertyImage = c.Binary(),
                    })
                .PrimaryKey(t => t.PropertyId)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserId = c.Int(nullable: false, identity: true),
                        FirstName = c.String(),
                        LastName = c.String(),
                        Email = c.String(),
                        IsPropertyManager = c.Boolean(nullable: false),
                        UserName = c.String(),
                    })
                .PrimaryKey(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Properties", "UserId", "dbo.Users");
            DropIndex("dbo.Properties", new[] { "UserId" });
            DropTable("dbo.Users");
            DropTable("dbo.Properties");
        }
    }
}
