using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace House_of_law_api.Data.Migrations;

public partial class ChangePasswordToString : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        // Convert PasswordHashed from varbinary to nvarchar
        migrationBuilder.Sql(@"
            IF EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID('users') AND name = 'PasswordHashed')
            BEGIN
                -- Drop column if exists
                ALTER TABLE users DROP COLUMN PasswordHashed;
            END
        ");

        migrationBuilder.Sql(@"
            IF EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID('users') AND name = 'PasswordSalt')
            BEGIN
                -- Drop column if exists
                ALTER TABLE users DROP COLUMN PasswordSalt;
            END
        ");

        // Add new columns as nvarchar(max)
        migrationBuilder.AddColumn<string>(
            name: "PasswordHashed",
            table: "users",
            type: "nvarchar(max)",
            nullable: true);

        migrationBuilder.AddColumn<string>(
            name: "PasswordSalt",
            table: "users",
            type: "nvarchar(max)",
            nullable: true);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        // Revert back to varbinary if needed
        migrationBuilder.Sql(@"
            IF EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID('users') AND name = 'PasswordHashed')
            BEGIN
                ALTER TABLE users DROP COLUMN PasswordHashed;
            END
        ");

        migrationBuilder.Sql(@"
            IF EXISTS (SELECT * FROM sys.columns WHERE object_id = OBJECT_ID('users') AND name = 'PasswordSalt')
            BEGIN
                ALTER TABLE users DROP COLUMN PasswordSalt;
            END
        ");

        migrationBuilder.AddColumn<byte[]>(
            name: "PasswordHashed",
            table: "users",
            type: "varbinary(max)",
            nullable: true);

        migrationBuilder.AddColumn<byte[]>(
            name: "PasswordSalt",
            table: "users",
            type: "varbinary(max)",
            nullable: true);
    }
}
