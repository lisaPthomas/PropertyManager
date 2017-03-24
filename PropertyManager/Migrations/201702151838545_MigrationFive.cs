namespace PropertyManager.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MigrationFive : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Properties", "Zip", c => c.String(maxLength: 5, unicode: false));
            AlterColumn("dbo.Properties", "ContactPhone", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Properties", "ContactPhone", c => c.String(nullable: false, maxLength: 10));
            AlterColumn("dbo.Properties", "Zip", c => c.String(nullable: false, maxLength: 5));
        }
    }
}
