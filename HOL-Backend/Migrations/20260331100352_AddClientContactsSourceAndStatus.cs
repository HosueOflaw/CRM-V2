using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace House_of_law_api.Migrations
{
    /// <inheritdoc />
    public partial class AddClientContactsSourceAndStatus : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "civil_status_id",
                table: "mainfiles",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "contact_status_id",
                table: "mainfiles",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "cooperation_status_id",
                table: "mainfiles",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "internal_status_id",
                table: "mainfiles",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "civil_id",
                table: "custody_statements",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "contract_no",
                table: "custody_statements",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "court",
                table: "custody_statements",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "person_name",
                table: "custody_statements",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "phone_number",
                table: "custody_statements",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "value",
                schema: "dbo",
                table: "attachments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "notes",
                schema: "dbo",
                table: "attachments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "auto_number_code",
                schema: "dbo",
                table: "attachments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "attach_type",
                schema: "dbo",
                table: "attachments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "attach_code",
                schema: "dbo",
                table: "attachments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "lookup_values",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    is_active = table.Column<bool>(type: "bit", nullable: false),
                    created_at = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_lookup_values", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "lookup_values");

            migrationBuilder.DropColumn(
                name: "civil_status_id",
                table: "mainfiles");

            migrationBuilder.DropColumn(
                name: "contact_status_id",
                table: "mainfiles");

            migrationBuilder.DropColumn(
                name: "cooperation_status_id",
                table: "mainfiles");

            migrationBuilder.DropColumn(
                name: "internal_status_id",
                table: "mainfiles");

            migrationBuilder.DropColumn(
                name: "civil_id",
                table: "custody_statements");

            migrationBuilder.DropColumn(
                name: "contract_no",
                table: "custody_statements");

            migrationBuilder.DropColumn(
                name: "court",
                table: "custody_statements");

            migrationBuilder.DropColumn(
                name: "person_name",
                table: "custody_statements");

            migrationBuilder.DropColumn(
                name: "phone_number",
                table: "custody_statements");

            migrationBuilder.AlterColumn<string>(
                name: "value",
                schema: "dbo",
                table: "attachments",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "notes",
                schema: "dbo",
                table: "attachments",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "auto_number_code",
                schema: "dbo",
                table: "attachments",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "attach_type",
                schema: "dbo",
                table: "attachments",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "attach_code",
                schema: "dbo",
                table: "attachments",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }
    }
}
