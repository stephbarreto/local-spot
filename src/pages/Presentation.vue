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
                        <!-- <div class="col-md-9">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <card type="vaga" plain>
                                        <img slot="image" src="img/vaga1.jpg" alt="">
                                        <a href="#">
                                            <h4 class="card-title">{{endereco}}</h4>
                                        </a>
                                        <p class="card-description">
                                            {{valor}}
                                        </p>
                                        <div class="card-footer">
                                            <div class="price-container">
                                                <span class="price"> {{valor}} </span>
                                            </div>
                                        
                                            <el-tooltip effect="light" content="Remove from wishlist" placement="top">
                                                <n-button type="danger" icon round class="pull-right btn-neutral">
                                                    <i class="now-ui-icons ui-2_favourite-28"></i>
                                                </n-button>
                                            </el-tooltip>
                                        </div>
                                    </card>
                                </div> -->

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
                                        <button class="btn btn-primary round" data-toggle="modal" @click.native="showSwal">
                                            Reservar
                                        </button>

                                    </card>
                                </div>
                                
                            </div>
                        <!-- </div> -->
                    </div>
                </div>
            </div>
        </div>
       
    
</template>
<script src="sweetalert2.all.min.js"></script>
<script src="../js/presentation.js"></script>

<style>
</style>