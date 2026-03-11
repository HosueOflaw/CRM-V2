using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace House_of_law_api.Migrations
{
    /// <inheritdoc />
    public partial class AddClientContactsAndFinancialDetails : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "collection_commission",
                table: "clients",
                type: "decimal(18,2)",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "down_payment_percent",
                table: "clients",
                type: "decimal(18,2)",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "final_payment_percent",
                table: "clients",
                type: "decimal(18,2)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "client_contacts",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    client_id = table.Column<long>(type: "bigint", nullable: false),
                    phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    relation = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_client_contacts", x => x.id);
                    table.ForeignKey(
                        name: "FK_client_contacts_clients_client_id",
                        column: x => x.client_id,
                        principalTable: "clients",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "client_financial_details",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    client_id = table.Column<long>(type: "bigint", nullable: false),
                    category = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    down_payment_percent = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    final_payment_percent = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    collection_commission = table.Column<decimal>(type: "decimal(18,2)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_client_financial_details", x => x.id);
                    table.ForeignKey(
                        name: "FK_client_financial_details_clients_client_id",
                        column: x => x.client_id,
                        principalTable: "clients",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_client_contacts_client_id",
                table: "client_contacts",
                column: "client_id");

            migrationBuilder.CreateIndex(
                name: "IX_client_financial_details_client_id",
                table: "client_financial_details",
                column: "client_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "client_contacts");

            migrationBuilder.DropTable(
                name: "client_financial_details");

            migrationBuilder.DropColumn(
                name: "collection_commission",
                table: "clients");

            migrationBuilder.DropColumn(
                name: "down_payment_percent",
                table: "clients");

            migrationBuilder.DropColumn(
                name: "final_payment_percent",
                table: "clients");
        }
    }
}
