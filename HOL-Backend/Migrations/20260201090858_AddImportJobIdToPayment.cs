using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace House_of_law_api.Migrations
{
    /// <inheritdoc />
    public partial class AddImportJobIdToPayment : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "import_job_id",
                table: "payments",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_payments_import_job_id",
                table: "payments",
                column: "import_job_id");

            migrationBuilder.CreateIndex(
                name: "IX_payments_user_added",
                table: "payments",
                column: "user_added");

            migrationBuilder.AddForeignKey(
                name: "FK_payments_import_jobs_import_job_id",
                table: "payments",
                column: "import_job_id",
                principalTable: "import_jobs",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_payments_users_user_added",
                table: "payments",
                column: "user_added",
                principalTable: "users",
                principalColumn: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_payments_import_jobs_import_job_id",
                table: "payments");

            migrationBuilder.DropForeignKey(
                name: "FK_payments_users_user_added",
                table: "payments");

            migrationBuilder.DropIndex(
                name: "IX_payments_import_job_id",
                table: "payments");

            migrationBuilder.DropIndex(
                name: "IX_payments_user_added",
                table: "payments");

            migrationBuilder.DropColumn(
                name: "import_job_id",
                table: "payments");
        }
    }
}
