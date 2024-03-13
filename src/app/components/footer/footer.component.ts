import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  listProducts: string[] = [
    "Leite de Amêndoa Orgânico",
    "Queijo Vegano de Castanha de Caju",
    "Hambúrguer de Grão de Bico",
    "Iogurte de Coco Sem Lactose",
    "Salsicha Vegetal Defumada",
    "Maionese Vegana de Abacate",
    "Chocolate Amargo Vegano",
    "Sorvete de Banana com Chocolate",
    "Patê de Ervas Finas Sem Ingredientes de Origem Animal",
    "Pão Integral Sem Ovos"
  ]

  listSupport: string[] = [
    "Suporte de Produtos",
    "Agendar Reparo",
    "Acompanhar Reparo",
    "Telefones",
    "Contatos Online",
    "Centro de Serviços",
    "Informações de Garantia",
    "Comunidade",
    "E-mail para o CEO"
  ];

  listAboutUs: string[] = [
    "Informações da empresa",
    "Área de negócios",
    "Identidade da marca",
    "Carreiras",
    "Relações com investidores",
    "Notícias",
    "Ética",
    "Loja física"
  ];

  listAccount: string[] = [
    "Gerenciar seu ID EcoMarket",
    "Conta da EcoMarket"
  ];

  listSustainability: string[] = [
    "Meio ambiente",
    "Segurança e Privacidade",
    "Acessibilidade",
    "Diversidade · Equidade · Inclusão",
    "Cidadania corporativa",
    "Sustentabilidade Corporativa"
  ];

  listTerms: string[] = [
    "Termos & Condições",
    "Loja Online",
    "Privacidade",
    "Cookies",
    "Legal",
    "Mapa do site",
    "Cibersegurança"
  ]

}
