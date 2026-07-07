namespace PortfolioApi.Models
{
    public class Skill
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Color { get; set; } = string.Empty; // React için özel renk kodu (#61DAFB v.b.)
        
        // Kategori: "frontend", "backend", "tools", "ai"
        public string Category { get; set; } = string.Empty;
    }
}
