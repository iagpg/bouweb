export default function ContactInfoCards() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="flex items-start gap-4 bg-surface-container-high p-6">
        <div className="rounded-md bg-primary-container/20 p-3">
          <span className="material-symbols-outlined text-primary">phone_in_talk</span>
        </div>
        <div>
          <p className="mb-1 text-xs font-headline uppercase tracking-widest text-primary">
            Contato
          </p>
          <p className="text-xl font-headline font-medium text-on-surface">
            +1 (555) 012-3456
          </p>
          <p className="text-sm text-on-surface-variant">Seg-Sex: 08:00 - 17:00</p>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-surface-container-high p-6">
        <div className="rounded-md bg-primary-container/20 p-3">
          <span className="material-symbols-outlined text-primary">mail</span>
        </div>
        <div>
          <p className="mb-1 text-xs font-headline uppercase tracking-widest text-primary">
            Vendedores
          </p>
          <p className="text-xl font-headline font-medium text-on-surface">
            vendas2@bouwobra.com
            vendas3@bouwobra.com
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 bg-surface-container-high p-6">
        <div className="rounded-md bg-primary-container/20 p-3">
          <span className="material-symbols-outlined text-primary">location_on</span>
        </div>
        <div>
          <p className="mb-1 text-xs font-headline uppercase tracking-widest text-primary">
            Nossa Loja
          </p>
          <p className="text-xl font-headline font-medium leading-tight text-on-surface">
            Av Campos Sales 146, Vila Nova, Santos - SP <br />
          </p>
        </div>
      </div>
    </div>
  );
}
