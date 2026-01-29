using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace House_of_law_api.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddStoredFileNameToImportJob : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "stored_file_name",
                table: "import_jobs",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "stored_file_name",
                table: "import_jobs");
        }
    }
}
