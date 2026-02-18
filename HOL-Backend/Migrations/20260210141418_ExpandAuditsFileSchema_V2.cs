using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace House_of_law_api.Migrations
{
    /// <inheritdoc />
    public partial class ExpandAuditsFileSchema_V2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "entity_added_date",
                table: "audits_files",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "entity_update_date",
                table: "audits_files",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "user_code",
                table: "audits_files",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "entity_added_date",
                table: "audits_files");

            migrationBuilder.DropColumn(
                name: "entity_update_date",
                table: "audits_files");

            migrationBuilder.DropColumn(
                name: "user_code",
                table: "audits_files");
        }
    }
}
