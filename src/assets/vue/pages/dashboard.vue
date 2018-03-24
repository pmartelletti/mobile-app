<template>
    <f7-page>
        <f7-navbar>
            <!-- TODO: remove this when it's the main page -->
            <div class="title">Your Activity</div>
            <f7-nav-right>
                <f7-link href="/profile/" icon="fa fa-user-circle"></f7-link>
            </f7-nav-right>
        </f7-navbar>

        <f7-row no-gap>
            <f7-col>
                <div class="card">
                    <div class="card-content card-content-padding">
                        <div class="text-align-center text-color-green" style="font-size: 25px">
                            <i class="fa fa-gbp"></i> 345.50
                        </div>
                        <div class="text-align-center">
                            <small>spent across all coops</small>
                        </div>
                    </div>
                </div>
            </f7-col>
            <f7-col>
                <div class="card">
                    <div class="card-header">Total Dividend</div>
                    <div class="card-content card-content-padding">
                        content
                    </div>
                </div>
            </f7-col>
        </f7-row>

        <div class="card">
            <div class="card-header">Spend over last 10 weeks</div>
            <div class="card-content card-content-padding">graph here!</div>
        </div>

        <f7-block-title class="searchbar-found">Coops you belong to</f7-block-title>
        <f7-list class="components-list">
            <f7-list-group>
                <f7-list-item title="Tamworth Co-op" link="/transactions/"></f7-list-item>
                <f7-list-item title="Southern Co-op" link="/transactions/"></f7-list-item>
            </f7-list-group>
        </f7-list>

    </f7-page>
</template>

<script>
    export default {};

</script>