using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace House_of_law_api.Migrations
{
    /// <inheritdoc />
    public partial class UpdateAuditsFileSchema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "user_added",
                table: "audits_files");

            migrationBuilder.RenameColumn(
                name: "user_updated",
                table: "audits_files",
                newName: "user_id");

            migrationBuilder.RenameColumn(
                name: "audit",
                table: "audits_files",
                newName: "previous_state");

            migrationBuilder.AddColumn<string>(
                name: "action",
                table: "audits_files",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "action_date",
                table: "audits_files",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "current_state",
                table: "audits_files",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "description",
                table: "audits_files",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "entity_id",
                table: "audits_files",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "entity_type",
                table: "audits_files",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "action",
                table: "audits_files");

            migrationBuilder.DropColumn(
                name: "action_date",
                table: "audits_files");

            migrationBuilder.DropColumn(
                name: "current_state",
                table: "audits_files");

            migrationBuilder.DropColumn(
                name: "description",
                table: "audits_files");

            migrationBuilder.DropColumn(
                name: "entity_id",
                table: "audits_files");

            migrationBuilder.DropColumn(
                name: "entity_type",
                table: "audits_files");

            migrationBuilder.RenameColumn(
                name: "user_id",
                table: "audits_files",
                newName: "user_updated");

            migrationBuilder.RenameColumn(
                name: "previous_state",
                table: "audits_files",
                newName: "audit");

            migrationBuilder.AddColumn<int>(
                name: "user_added",
                table: "audits_files",
                type: "int",
                nullable: true);
        }
    }
}
