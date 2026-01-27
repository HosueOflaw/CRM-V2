using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace House_of_law_api.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddImportJobIdToDataEntities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "import_job_id",
                table: "mainfiles",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "import_job_id",
                table: "file_details",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "import_job_id",
                table: "auto_numbers",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_mainfiles_import_job_id",
                table: "mainfiles",
                column: "import_job_id");

            migrationBuilder.CreateIndex(
                name: "IX_file_details_import_job_id",
                table: "file_details",
                column: "import_job_id");

            migrationBuilder.CreateIndex(
                name: "IX_auto_numbers_import_job_id",
                table: "auto_numbers",
                column: "import_job_id");

            migrationBuilder.AddForeignKey(
                name: "FK_auto_numbers_import_jobs_import_job_id",
                table: "auto_numbers",
                column: "import_job_id",
                principalTable: "import_jobs",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_file_details_import_jobs_import_job_id",
                table: "file_details",
                column: "import_job_id",
                principalTable: "import_jobs",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_mainfiles_import_jobs_import_job_id",
                table: "mainfiles",
                column: "import_job_id",
                principalTable: "import_jobs",
                principalColumn: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_auto_numbers_import_jobs_import_job_id",
                table: "auto_numbers");

            migrationBuilder.DropForeignKey(
                name: "FK_file_details_import_jobs_import_job_id",
                table: "file_details");

            migrationBuilder.DropForeignKey(
                name: "FK_mainfiles_import_jobs_import_job_id",
                table: "mainfiles");

            migrationBuilder.DropIndex(
                name: "IX_mainfiles_import_job_id",
                table: "mainfiles");

            migrationBuilder.DropIndex(
                name: "IX_file_details_import_job_id",
                table: "file_details");

            migrationBuilder.DropIndex(
                name: "IX_auto_numbers_import_job_id",
                table: "auto_numbers");

            migrationBuilder.DropColumn(
                name: "import_job_id",
                table: "mainfiles");

            migrationBuilder.DropColumn(
                name: "import_job_id",
                table: "file_details");

            migrationBuilder.DropColumn(
                name: "import_job_id",
                table: "auto_numbers");
        }
    }
}
