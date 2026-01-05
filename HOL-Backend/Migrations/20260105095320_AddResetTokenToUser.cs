using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace House_of_law_api.Migrations
{
    /// <inheritdoc />
    public partial class AddResetTokenToUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "reset_token",
                table: "users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "reset_token_expiry",
                table: "users",
                type: "datetime2",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "reset_token",
                table: "users");

            migrationBuilder.DropColumn(
                name: "reset_token_expiry",
                table: "users");
        }
    }
}
