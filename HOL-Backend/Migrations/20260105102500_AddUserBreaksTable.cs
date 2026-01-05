using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace House_of_law_api.Migrations
{
    /// <inheritdoc />
    public partial class AddUserBreaksTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "user_breaks",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    user_id = table.Column<int>(type: "int", nullable: false),
                    break_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    start_time = table.Column<DateTime>(type: "datetime2", nullable: false),
                    end_time = table.Column<DateTime>(type: "datetime2", nullable: true),
                    duration_minutes = table.Column<int>(type: "int", nullable: true),
                    late_minutes = table.Column<int>(type: "int", nullable: true),
                    is_completed = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_user_breaks", x => x.id);
                    table.ForeignKey(
                        name: "FK_user_breaks_users_user_id",
                        column: x => x.user_id,
                        principalTable: "users",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_user_breaks_user_id",
                table: "user_breaks",
                column: "user_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "user_breaks");
        }
    }
}
