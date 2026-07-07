using System;
using System.ComponentModel.DataAnnotations;

namespace PortfolioApi.Models
{
    public class ContactMessage
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Ad alanı zorunludur.")]
        [StringLength(100, ErrorMessage = "Ad en fazla 100 karakter olabilir.")]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "E-posta alanı zorunludur.")]
        [EmailAddress(ErrorMessage = "Geçersiz e-posta adresi.")]
        [StringLength(150, ErrorMessage = "E-posta en fazla 150 karakter olabilir.")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Konu alanı zorunludur.")]
        [StringLength(150, ErrorMessage = "Konu en fazla 150 karakter olabilir.")]
        public string Subject { get; set; } = string.Empty;

        [Required(ErrorMessage = "Mesaj alanı zorunludur.")]
        [StringLength(2000, ErrorMessage = "Mesaj en fazla 2000 karakter olabilir.")]
        public string Message { get; set; } = string.Empty;

        public DateTime DateSent { get; set; } = DateTime.UtcNow;
    }
}

