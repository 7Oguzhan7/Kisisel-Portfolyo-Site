namespace PortfolioApi.Models
{
    public class Certificate
    {
        public int Id { get; set; }
        public string TitleTr { get; set; } = string.Empty;
        public string TitleEn { get; set; } = string.Empty;
        public string Organization { get; set; } = string.Empty; // Kurum (örn: HackerRank, Udemy)
        public string Date { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;  // Sertifika görseli yolu
        public string Link { get; set; } = string.Empty;       // Doğrulama / sertifika linki
    }
}
