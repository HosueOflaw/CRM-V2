using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace House_of_law_api.Migrations
{
    /// <inheritdoc />
    public partial class AddCustodyStatements : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "custody_statements",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    file_code = table.Column<long>(type: "bigint", nullable: true),
                    dept_code = table.Column<long>(type: "bigint", nullable: true),
                    code_attach = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    code_expense = table.Column<int>(type: "int", nullable: true),
                    statement_no = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    amount = table.Column<decimal>(type: "decimal(18,3)", nullable: true),
                    code_auto_no = table.Column<long>(type: "bigint", nullable: true),
                    code_status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    send_to_acc = table.Column<bool>(type: "bit", nullable: false),
                    send_to_company = table.Column<bool>(type: "bit", nullable: false),
                    receive_sec = table.Column<bool>(type: "bit", nullable: false),
                    receive_acc = table.Column<bool>(type: "bit", nullable: false),
                    date_added = table.Column<DateTime>(type: "datetime2", nullable: true),
                    user_added = table.Column<int>(type: "int", nullable: true),
                    user_sec = table.Column<int>(type: "int", nullable: true),
                    user_acc = table.Column<int>(type: "int", nullable: true),
                    enabled = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_custody_statements", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "custody_statements");
        }
    }
}
