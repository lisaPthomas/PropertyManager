namespace PropertyManager.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MigrationTwo : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Properties", "Zip", c => c.String(nullable: false, maxLength: 5));
            AlterColumn("dbo.Properties", "ContactPhone", c => c.String(nullable: false, maxLength: 10));
            DropColumn("dbo.Properties", "SqFootage");
            DropColumn("dbo.Properties", "Bedroom");
            DropColumn("dbo.Properties", "LeaseTerm");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Properties", "LeaseTerm", c => c.Int(nullable: false));
            AddColumn("dbo.Properties", "Bedroom", c => c.Int(nullable: false));
            AddColumn("dbo.Properties", "SqFootage", c => c.Double(nullable: false));
            AlterColumn("dbo.Properties", "ContactPhone", c => c.Int(nullable: false));
            AlterColumn("dbo.Properties", "Zip", c => c.Int(nullable: false));
        }
    }
}
