using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace House_of_law_api.Migrations
{
    /// <inheritdoc />
    public partial class AddReportFieldsToCustody : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "company_code",
                table: "custody_statements",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "company_or_office",
                table: "custody_statements",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "company_code",
                table: "custody_statements");

            migrationBuilder.DropColumn(
                name: "company_or_office",
                table: "custody_statements");
        }
    }
}
