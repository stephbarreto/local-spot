<template>
    <div class="wrapper ecommerce-page">
        <el-carousel height="100vh">
            <el-carousel-item>
                <div class="page-header header-filter">
                    <div class="page-header-image"
                         style="background-image: url('img/img-2.jpg')">
                    </div>
                    <div class="content-center text-center">
                        <div class="row">
                            <div class="col-md-8 ml-auto mr-auto">
                                <h1 class="title">Spotale.</h1>
                                <h4 class="description text-white">Encontre vagas de estacionamento na região, de forma segura e rápida!</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="page-header header-filter">
                    <div class="page-header-image"
                         style="background-image: url('img/img-1.jpg')">
                    </div>
                    <div class="content-center">
                        <div class="row">
                            <div class="col-md-8 ml-auto mr-auto text-center">
                                <h1 class="title">Spotale.</h1>
                                <h4 class="description text-white">Encontre vagas de estacionamento na região, de forma segura e rápida!</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
        <div class="main">
            <div class="section">
                <div class="container">
                    <h2 class="section-title">Categorias</h2>
                    <div class="justify-content-right">
                        <n-button type="default" @click.native="modals.cadastro_vaga = true">
                            Cadastrar Vaga
                        </n-button>
                        <n-button type="default" @click.native="modals.cadastro_user = true">
                            Cadastar Usuário
                        </n-button>
                    </div>
                    
                    <div class="row">
                        <div class="col-md-3">
                            <div class="collapse-panel">
                                <div class="card-body">
                                    <div class="card card-refine card-plain">
                                        <h4 class="card-title">
                                            Filtros
                                            <button class="btn btn-default btn-icon btn-neutral pull-right"
                                                    rel="tooltip" title="Reset Filter">
                                                <i class="arrows-1_refresh-69 now-ui-icons"></i>
                                            </button>
                                        </h4>
                                        <collapse>
                                            <collapse-item no-icon class="card-header">
                                                <h6 class="mb-0 text-primary" slot="title">
                                                    Vagas para Carro
                                                    <i class="now-ui-icons arrows-1_minimal-down"></i>
                                                </h6>
                                                <span class="price-left pull-left">€{{filters.priceRange[0]}}</span>
                                                <span class="price-right pull-right">€{{filters.priceRange[1]}}</span>
                                                <div class="clearfix"></div>
                                                <slider id="slider-refine"
                                                        class="slider-refine"
                                                        v-model="filters.priceRange"
                                                        :range="{min: 0, max: 900}"
                                                        :connect="true">
                                                </slider>
                                            </collapse-item>
                                            <collapse-item no-icon class="card-header">
                                                <h6 class="mb-0 text-primary" slot="title">
                                                    Vagas para Motocicletas
                                                    <i class="now-ui-icons arrows-1_minimal-down"></i>
                                                </h6>
                                                <n-checkbox v-for="clothing in filters.clothingTypes"
                                                            v-model="clothing.value"
                                                            :key="clothing.label">
                                                    {{clothing.label}}
                                                </n-checkbox>
                                            </collapse-item>
                                            <collapse-item no-icon class="card-header">
                                                <h6 class="mb-0 text-primary" slot="title">
                                                    Outras
                                                    <i class="now-ui-icons arrows-1_minimal-down"></i>
                                                </h6>
                                                <n-checkbox v-for="desginer in filters.designerTypes"
                                                            v-model="desginer.value"
                                                            :key="desginer.label">
                                                    {{desginer.label}}
                                                </n-checkbox>
                                            </collapse-item>
                                        </collapse>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div class="col-lg-4 col-md-6"
                                v-for="vaga in vagas"
                                :key="vaga.endereco">
                            <card type="vaga" plain>
                                <img slot="image" :src="products.image" alt="">

                                <a href="#">
                                    <h4 class="card-title">{{vaga.endereco}}</h4>
                                </a>
                                <p class="card-description">
                                    {{vaga.disponivel}}
                                </p>
                                
                                <div class="card-footer">
                                    <div class="price-container">
                                        <span class="price"> R$ {{vaga.valor}}</span>
                                    </div>
                                    
                                    <el-tooltip effect="light" content="Remove from wishlist" placement="top">
                                        <n-button type="danger" icon round class="pull-right btn-neutral">
                                            <i class="now-ui-icons ui-2_favourite-28"></i>
                                        </n-button>
                                    </el-tooltip>
                                </div>
                                <n-button type="primary" @click.native="modals.login = true">
                                    Reservar
                                </n-button>

                            </card>
                        </div>
                                
                        </div>
                    </div>
                </div>
            </div>
            <modal :show.sync="modals.login"
               modal-classes="modal-login"
               class="modal-primary">
            <div class="card card-plain card-login" data-background-color="" slot="base-content">
                <div class="modal-header justify-content-center">
                    <button type="button" class="close" @click.native="modals.login = false" aria-hidden="true">
                        <i class="now-ui-icons ui-1_simple-remove"></i>
                    </button>
                    <div class="header header-primary text-center">
                        <div class="logo-container">
                            <img v-lazy="'img/now-logo.png'" alt="">
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <form class="form" method="" action="">
                        <div class="card-body">
                            <fg-input class="no-border input-lg"
                                      addon-left-icon="now-ui-icons users_circle-08"
                                      v-model="form.user_id"
                                      placeholder="User ID">
                            </fg-input>

                            <fg-input class="no-border input-lg"
                                      type="password"
                                      addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                                      v-model="form.vaga_id"
                                      placeholder="Senha...">
                            </fg-input>
                        </div>
                    </form>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="submit" class="btn btn-neutral btn-round btn-lg btn-block" @click="modals.reserva = true" v-on:click="entrar">Efetuar Reserva</button>
                </div>
            </div>
        </modal>

        <modal :show.sync="modals.reserva"
               modal-classes="modal-reserva"
               class="modal-primary">
            <div class="card card-plain card-reserva" data-background-color="" slot="base-content">
                <div class="modal-header justify-content-center">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        <i class="now-ui-icons ui-1_simple-remove"></i>
                    </button>
                    <div class="header text-center">
                        Efetuar Reserva
                    </div>
                </div>
                <div class="modal-body">
                    <h5 class="text-center">Informações do Motorista</h5>
                    <hr>
                    <p><strong>Identificação:</strong> {{motorista.motoristaId}}</p>
                    <hr>
                    <p><strong>Nome:</strong> {{motorista.nome}}</p>
                    <hr>
                    <p><strong>Saldo:</strong> {{motorista.saldo}}</p>
                    <p></p>
                    <hr>
                    <p></p>
                    <h5 class="text-center">Dados da Vaga</h5>
                    <p><strong>Endereço:</strong>{{dados_vaga.endereco}}</p>
                    <p><strong>Valor:</strong>{{dados_vaga.valor}}</p>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-default btn-round" v-on:click="realizar_reserva" @click.native="modals.reserva = false">Vaaaaai!</button>
                </div>
                </div>
        </modal>
        <modal :show.sync="modals.cadastro_user"
               modal-classes="modal-reserva"
               class="modal-primary">
            <div class="card card-plain card-login" data-background-color="" slot="base-content">
                <div class="modal-header justify-content-center">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        <i class="now-ui-icons ui-1_simple-remove"></i>
                    </button>
                </div>
                <div class="header text-center">
                    Cadastrar Usuário
                </div>
                <div class="modal-body">
                    <form class="form" method="" action="">
                        <div class="card-body">
                            <fg-input class="no-border input-lg"
                                      addon-left-icon="now-ui-icons users_circle-08"
                                      v-model="cadastro.id"
                                      placeholder="Identificação">
                            </fg-input>
                            <fg-input class="no-border input-lg"
                                      addon-left-icon="now-ui-icons users_circle-08"
                                      v-model="cadastro.nome"
                                      placeholder="Nome">
                            </fg-input>
                            <fg-input class="no-border input-lg"
                                      addon-left-icon="now-ui-icons users_circle-08"
                                      v-model="cadastro.saldo"
                                      placeholder="Saldo">
                            </fg-input>
                            <fg-input class="no-border input-lg"
                                      type="password"
                                      addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                                      v-model="form.password"
                                      placeholder="Senha...">
                            </fg-input>
                        </div>
                    </form>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-default btn-round" data-dismiss="modal" @click.native="modals.cadastro_user = false" v-on:click="cadastrar">Cadastrar!</button>
                </div>
            </div>
        </modal>
        <modal :show.sync="modals.cadastro_vaga"
               modal-classes="modal-reserva"
               class="modal-primary">
            <div class="card card-plain card-reserva" data-background-color="" slot="base-content">
                <div class="modal-header justify-content-center">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        <i class="now-ui-icons ui-1_simple-remove"></i>
                    </button>
                    <div class="header text-center">
                        Efetuar Reserva
                    </div>
                </div>
                <div class="modal-body">
                    <form class="form" method="" action="">
                        <div class="card-body">
                            <fg-input class="no-border input-lg"
                                      addon-left-icon="now-ui-icons users_circle-08"
                                      v-model="cadastro_vaga.id"
                                      placeholder="Identificação">
                            </fg-input>
                            <fg-input class="no-border input-lg"
                                      addon-left-icon="now-ui-icons users_circle-08"
                                      v-model="cadastro_vaga.endereco"
                                      placeholder="Nome">
                            </fg-input>
                            <fg-input class="no-border input-lg"
                                      addon-left-icon="now-ui-icons users_circle-08"
                                      v-model="cadastro_vaga.valor"
                                      placeholder="Valor">
                            </fg-input>
                        </div>
                    </form>
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-default btn-round" data-dismiss="modal" v-on:click="cadastrar_vaga">Cadastrar!</button>
                </div>
                </div>
        </modal>
        </div>
       
    
</template>
<script src="sweetalert2.all.min.js"></script>
<script src="../js/presentation.js"></script>

<style>
</style>