Vue.component("Orders", {
  data: () => ({
    title: "Pedidos",
    count: 0,
    dataTable: {
      title: "Table Title",
      headers: [
        "#",
        "Cabeçalho",
        "Cabeçalho",
        "Cabeçalho",
        "Cabeçalho",
        "Cabeçalho",
      ],
      content: [
        ["1,001", "libero", "amet", "dapibus", "libero", "dapibus"],
        ["1,002", "amet", "amet", "Integer", "libero", "dapibus"],
        ["1,003", "libero", "Integer", "dapibus", "libero", "dapibus"],
        ["1,004", "dapibus", "amet", "Integer", "libero", "dapibus"],
        ["1,005", "Lorem", "amet", "Integer", "libero", "dapibus"],
      ],
    },
  }),
  template: `<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
    <ModalOrder page="Orders"></ModalOrder>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">{{title}}</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
      <ModalButton text="Novo" size="xl" :outlined="true" color="secondary"/>
    </div>
    </div>
    <InfoTable :dataTable="dataTable"></InfoTable>
  </main>`,
});
