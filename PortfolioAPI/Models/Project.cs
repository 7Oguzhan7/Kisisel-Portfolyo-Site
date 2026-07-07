namespace PortfolioApi.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string TitleTr { get; set; } = string.Empty;
        public string TitleEn { get; set; } = string.Empty;
        public string DescriptionTr { get; set; } = string.Empty;
        public string DescriptionEn { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public string GitHubUrl { get; set; } = string.Empty;
        public string DemoUrl { get; set; } = string.Empty;
        
        // Virgülle ayrılmış teknolojiler (örn: "React, Node.js, Stripe")
        public string Technologies { get; set; } = string.Empty;
    }
}
