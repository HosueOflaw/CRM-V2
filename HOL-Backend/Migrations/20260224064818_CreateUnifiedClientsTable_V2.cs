using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace House_of_law_api.Migrations
{
    /// <inheritdoc />
    public partial class CreateUnifiedClientsTable_V2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "dbo");

            migrationBuilder.Sql("IF EXISTS (SELECT * FROM sys.objects WHERE name = 'clients') DROP TABLE [clients];");

            migrationBuilder.RenameTable(
                name: "attachments",
                newName: "attachments",
                newSchema: "dbo");

/*
            migrationBuilder.AddColumn<int>(
                name: "import_job_id",
                table: "mails",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "import_job_id",
                schema: "dbo",
                table: "attachments",
                type: "int",
                nullable: true);
*/

            migrationBuilder.CreateTable(
                name: "clients",
                columns: table => new
                {
                    id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    code = table.Column<int>(type: "int", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    cid = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    nationality = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    work = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    membership = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    company_email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    company_fax = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    company_register = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    partner1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    partner2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    partner3 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    register_type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    note = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    contract_no = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    department = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dept_code = table.Column<long>(type: "bigint", nullable: true),
                    legal_plaintiff = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    contract_details = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    patch_no = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    date_finished = table.Column<DateTime>(type: "datetime2", nullable: true),
                    dept_amount = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    lawyer_user = table.Column<int>(type: "int", nullable: true),
                    court_user = table.Column<int>(type: "int", nullable: true),
                    md_user = table.Column<int>(type: "int", nullable: true),
                    legal_advisor_user = table.Column<int>(type: "int", nullable: true),
                    phone1 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    phone1_owner = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    phone2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    phone2_owner = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    financial_amount = table.Column<decimal>(type: "decimal(18,3)", nullable: true),
                    financial_type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    user_added = table.Column<int>(type: "int", nullable: true),
                    date_added = table.Column<DateTime>(type: "datetime2", nullable: true),
                    user_updated = table.Column<int>(type: "int", nullable: true),
                    date_updated = table.Column<DateTime>(type: "datetime2", nullable: true),
                    import_job_id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_clients", x => x.id);
                    table.ForeignKey(
                        name: "FK_clients_import_jobs_import_job_id",
                        column: x => x.import_job_id,
                        principalTable: "import_jobs",
                        principalColumn: "id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_clients_import_job_id",
                table: "clients",
                column: "import_job_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "clients");

/*
            migrationBuilder.DropColumn(
                name: "import_job_id",
                table: "mails");

            migrationBuilder.DropColumn(
                name: "import_job_id",
                schema: "dbo",
                table: "attachments");
*/

            migrationBuilder.RenameTable(
                name: "attachments",
                schema: "dbo",
                newName: "attachments");
        }
    }
}
