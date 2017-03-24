namespace PropertyManager.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MigrationThree : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Properties", "SqFootage", c => c.Int(nullable: false));
            AddColumn("dbo.Properties", "Bedroom", c => c.Int(nullable: false));
            AddColumn("dbo.Properties", "LeaseTerm", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Properties", "LeaseTerm");
            DropColumn("dbo.Properties", "Bedroom");
            DropColumn("dbo.Properties", "SqFootage");
        }
    }
}
