using Microsoft.EntityFrameworkCore;
using PortfolioApi.Data;

var builder = WebApplication.CreateBuilder(args);

// SQLite veritabanı bağlantımızı ekliyoruz (appsettings.json'dan okur)
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// CORS Politikasını tanımlıyoruz: React uygulamamızın her porttan erişebilmesini sağlar
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

// API Controller desteğini etkinleştiriyoruz
builder.Services.AddControllers();

// OpenAPI (Swagger) desteği
builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// CORS'u aktif ediyoruz
app.UseCors("AllowReactApp");

app.UseAuthorization();

// API Controller'larımızın rotalarını eşleştiriyoruz
app.MapControllers();

app.Run();
